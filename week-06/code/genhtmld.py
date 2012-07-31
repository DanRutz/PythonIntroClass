"""
genhtmlc.py  Python class example.

This module starts eliminating duplicate code with subclassing

"""
class Element(object):
    """
    base class for an html element
    
    must be sub-classed to be useful    
    """
    tag = "" #should be over-ridden by subclasses
    indent = "  "
    def __init__(self, txt):
        self.txt = txt
    def render(self, file_out, ind = ""):
        """
        an html rendering method for elements that put the tags on different lines
        """
        file_out.write(ind)
        file_out.write("<%s>\n"%self.tag )
        file_out.write(ind + self.indent)
        file_out.write(self.txt)
        file_out.write("\n" + ind)
        file_out.write("</%s>\n"%self.tag)

class Head(object):
    tag = "head"
    def __init__(self):
        self.kids = []
    def append(self, element):
        self.kids.append(element)
    def render(self, file_out, ind = ""):
        """
        an html render that renders the children of an element inside the element
        """
        file_out.write(ind)
        file_out.write("<%s>\n"%self.tag)
        for kid in self.kids:
            kid.render(file_out, ind + "    ")
        file_out.write(ind)
        file_out.write("</%s>\n"%self.tag)

class Title(Element):
    tag = "title"

    def render(self, file_out, ind = ""):
        """
        an html rendering method for elements that put the tags on same line
        """
        file_out.write(ind)
        file_out.write("<%s>"%self.tag)
        file_out.write(self.txt)
        file_out.write("</%s>\n"%self.tag)

class P(Element):
    tag = "p"

if __name__ == "__main__":
    import sys
    h = Head()
    h.append(Title("PythonClass = Revision 1087:"))
    h.append(P("Here is a paragprah of text -- there could be more of them, but this is enough  to show that we can do some text"))
    h.render(sys.stdout)
