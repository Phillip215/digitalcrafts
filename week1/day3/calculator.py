calc = int(input("I'm just your everyday calculator put in a number "))
opp = input("Now put in a operand please ")
calc2 = int(input("Now the other number "))

# Subtract
if opp == "-":
  ans = calc - calc2
  print("Your answer is %s" % (ans))

# Multiply
if opp == "*":
  wer = calc * calc2
  print("Your answer is %s" % (wer))

# Add
if opp == "+":
  sol = calc + calc2
  print("Your answer is %s" % (sol))

if opp == "/":
  ution = calc / calc2
  print("Your answer is %s" % (ution))
