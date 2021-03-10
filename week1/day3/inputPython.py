# name_of_user = input("What is your name?")
nameOfUser = input("What is your first name?")
# Store the users first name into a number value that we can use
lengthOfUserName = len(nameOfUser)

# While loop
# A condition has to be true to keep your loop running
while (lengthOfUserName < 1):
  nameOfUser = input("What is your first name?")
  lengthOfUserName = len(nameOfUser)


lastNameOfUser = input("What is your last name?")

# Store the users last name into a number value that we can use
lengthOfUserLastName = len(lastNameOfUser)
# Take the users last name

while (lengthOfUserLastName < 1):
  lastNameOfUser = input("What is your last name?")
  lengthOfUserLastName = len(lastNameOfUser)

# if statements. Do something if a certain condition happens or doesn't happen
if lengthOfUserName > 0:

  nameOfFriend = input("What is your friends name?")
  print("Your friends name is", nameOfFriend)
else:
  print("Please enter at least one letter...PLEASE MY BOY")


# print("This is the length of the users first name", lengthOfUserName)
# print("This is the length of the users last name", lengthOfUserLastName)
# print("The user name is %s %s " % (nameOfUser, lastNameOfUser))
# print("Hello %s %s, welcome to python" % (nameOfUser, lastNameOfUser))
