#/usr/bin/ev python

"""
Trigram.py

A solution to the trigram coding Kata:

http://codekata.pragprog.com/2007/01/kata_fourteen_t.html

Chris Barker's Solution
"""

# infilename = "sherlock_small.txt"
infilename = "sherlock.txt"

import string
import random

# translation table for string.translate:
# I use this to purge the punctuation..

# stuff I want to keep:
valid = string.letters + "'"
all = ''.join([chr(i) for i in range(256)])
table = []
for c in all:
    if c in valid:
        table.append(c)
    else:
        table.append(' ')
table = ''.join(table)

infile = open(infilename, 'r')
# strip out the header, table of contents, etc.
for i in range(61):
    infile.readline()
# read the rest of the file into memory
in_data = open(infilename, 'r').read()

# Dictionary for trigram results:
word_pairs = {}

# lower-case everything to remove that complication:
in_data = in_data.lower()

# strip out the punctuation:
in_data = in_data.translate(table)

# split into words
words = in_data.split()

# remove the bare single quotes
# " ' " is both a quote and an apostrophe
words = [word for word in words if word != "'"]# loop through the words
for i in range(len(words) - 2):
    pair = " ".join(words[i:i+2])
    follower = words[i+2]
    word_pairs.setdefault(pair,[]).append(follower)


# A little reporting
#for pair, followers in word_pairs.items():
#    if len(followers) > 1:
#        print pair, followers

# create some new text
new_text = []        
for i in range (100): #just do a few
    pair = random.sample(word_pairs, 1)[0]  
    follower = random.sample(word_pairs[pair], 1)[0]
    new_text.extend( (pair, follower) )

new_text = " ".join(new_text)

print new_text

