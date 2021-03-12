# Firts Algo
for number in range(1, 101):
  if number % 3 == 0 and number % 5 == 0:
    print("FizzBuzz")
  elif number % 3 == 0:
    print("fizz")
  elif number % 5 == 0:
    print("buzz")
  else:
    print(number)

#Second Algo
total = 0
for num in range(1000):
  if num % 3 == 0 or num % 5 == 0:
    total = total + num
print(total)
