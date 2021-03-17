
class User:
  def __init__(self, name, age):
    self.name = name
    self.age = age




# stacy = User("Stacy", 29)

# print(stacy.name, stacy.age)

class tempUser:
  def __init__(self, name):
    self.name = name


# henry = tempUser("Henry")

# print(henry.name)

def info():
  begin = int(input("Hello if you are the user press(1) if your only a temporary user press(2) "))
  if begin == 1:
    nameUser = input("What is your name? ")
    ageUser = int(input("How old are you? "))
    h = User(nameUser, ageUser)
    print(f"Your user name is {h.name} and your age is {h.age}.")
  elif begin == 2:
    nameTemp = input("What is your name? ")
    z = tempUser(nameTemp)
    print(f"Your temp name is {z.name}.")
    return begin

info()
