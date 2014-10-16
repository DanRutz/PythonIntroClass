#!/usr/bin/python

import string, sys, re, shutil, os

mountPath = "/mnt/cribsbiox/"  
#buildTar is unnecessary if the VMX exists on Cribs
#buildTar = "b.dsledz.ovf.7r/obj/install.tar"
vmxPath = None  #where we're pulling from
datastorePath = None  #nfs export for ESXi datastore
workDir = None  # temp dir

def checkMount(mountPath):
    return os.path.ismount(mountPath)

def copyBuildTar(buildTar):
    import shutil
    tmpFile = "/tmp/install.tar"
    if(os.path.exists(tmpFile)):
        try:
            os.remove(tmpFile)
        except:
            print "Exception: ",str(sys.exc_info())
    else:
        shutil.copy2('/mnt/builds/b.dsledz.ovf.7r/obj/install.tar', '/tmp/install.tar')
        return()

def findVmxInPath(vmxPath):
    if os.path.exists(vmxPath):
        for f in os.listdir(vmxPath):
            if f[-4:] == '.vmx':
                return f
    return None		
		
def updateVmx(config):
    global vmxPath, datastorePath, workDir
    oldConfigLines = open(vmxPath + config, 'r').readlines()
    newFile = open(workDir + config, 'w')

    for line in oldConfigLines:
        #Change BSD GuestVer String
	if line.find('guestOS = "freebsd"') != -1:
            line = 'guestOS = "freebsd-64"'
        #Add back-end network
        if re.match("^Ethernet.+\.vnet ", line):
            m = re.match("^Ethernet(.+)\.vnet ", line)
            line = 'Ethernet%s.networkName = \"VM Network\"\n' % m.group(1)
        elif re.match("^virtualHW.version", line):
            line = 'virtualHW.version = "7"\n'
        elif re.match("^ethernet[0-9]\.generated", line) or \
             re.match('^uuid\.', line) or \
             re.match('^serial[0-9]', line):
                 line = ""
        newFile.write(line)

    #Put back the virtual serial port concentrator for COM port connectivity
    newFile.write('serial0.present = "TRUE"\n')
    newFile.write('serial0.yieldOnMsrRead = "TRUE"\n')
    newFile.write('serial0.fileType = "network"\n')
    newFile.write('serial0.fileName = "vSPC.py"\n')
    newFile.write('serial0.vspc = "telnet://vspc.west.isilon.com:13370"\n')

def updateMD5():	
    #we should probably update the MD5 here for consistancy
    return()

def main(): 
    global vmxPath, datastorePath, workDir
    if len(sys.argv) != 3:
        sys.exit("Usage: %s /vmx/path /new/nfs/datastore" % (sys.argv[0]))
    print "Starting Conversion"
    if checkMount(mountPath):
        #copyBuildTar(buildTar) - unnecessary if build exists on Cribs
	vmxPath = sys.argv[1] + '/'
        datastorePath = sys.argv[2] + '/'
        workDir = datastorePath + "temp/"
        if os.path.exists(workDir):
            sys.exit("Temporary path exists, please backup or remove existing files.")
        else:
            os.makedirs(workDir)
        vmxFilename = findVmxInPath(vmxPath)
        updateVmx(vmxFilename)

        oldFiles = os.listdir(vmxPath)
        newFiles = os.listdir(workDir)
        for oldFile in oldFiles:
            if not os.path.exists(workDir + oldFile):
                shutil.copy(vmxPath + oldFile, workDir)

        os.system("ovftool %s%s %s%s" % 
            (workDir, vmxFilename, datastorePath, vmxFilename.split('.vmx')[0]+'.ovf'))

        os.chmod(datastorePath, 0755)
        for newFile in os.listdir(datastorePath):
            os.chmod(datastorePath + newFile, 0755)
    
        for oldFile in oldFiles:
            os.unlink(workDir + oldFile)
        os.rmdir(workDir)

if __name__ == '__main__':
    sys.exit(main())

