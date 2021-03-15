def hello():
  x = """
    What up my boy I'm a calculator!
    """

  return print(x)

def opperand(opper, firstNum, secondNum):
  solution = ""
  if opper == "+":
    solution = int(firstNum) + int(secondNum)
  elif opper == "-":
    solution = int(firstNum) - int(secondNum)
  elif opper == "/":
    solution = int(firstNum) / int(secondNum)
  elif opper == "*":
    solution = int(firstNum) * int(secondNum)
  else:
    print("Invalid input")
  return print(f"The answer is {solution}")


options = ""
hello()
while (options != "y"):
  first = input("What's your first number? ")
  opp = input("Now please put in a opperand ")
  second = input("Now the second number please ")
  opperand(opp, first, second)
  exit = input("Are you done my boy! (press y for yes) or (press anything else for no)")
  if exit == "y":
    break
