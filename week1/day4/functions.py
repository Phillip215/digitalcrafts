# Type of a function
# built in functions for python
# print
# len(3)

print(1 + 5)
# defining a function
# the word "def" , the name of the function, parenthesis (), then a colon :
# in the body of the function, you need a return statement

def add(n, n2):
  return n + n2

print(add(3, 7))

def multiply(nu, nu2):
  return nu * nu2

print(multiply(7, 22))

def div(num, num2):
  return num / num2

print(div(32, 12))

def sub(number1, number2):
  return number1 - number2

print(sub(800000000, 35000000))

# this finds the length of a string
string = input("Hey my boy type anything: ")

def str(string):
  return len(string)

print(str(string))
