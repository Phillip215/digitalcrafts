hi = input("Hi what's your first name? ")
lengthOfHi = len(hi)

while (lengthOfHi < 2):
  hi = input("Hi what's your first name? ")
  lengthOfHi = len(hi)

what = input("So what's your last name? ")
lengthOfWhat = len(what)

while (lengthOfWhat < 2):
  what = input("So what's your last name ")
  lengthOfWhat = len(what)

print("So your name is %s %s" % (hi, what))

hey = input("Hey what's your friends first name? ")
lengthOfHey = len(hey)

while (lengthOfHey < 1):
  hey = input("Hey what's your friends first name? ")
  lengthOfHey = len(hey)

why = input("So what's your friends last name? ")
lengthOfWhy = len(why)

while (lengthOfWhy < 1):
  why = input("So what's your last name ")
  lengthOfWhy = len(why)

print("You %s %s are friends with %s %s" % (hi, what, hey, why))
