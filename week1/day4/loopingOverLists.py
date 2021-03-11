pets = ["dog", "cat", "ham"]

print(len(pets))

# Loop over a list
index = 0

while index < len(pets):
  pet = pets[index]
  print("What pet are ya? Well I'm a %s" % pet )
  index += 1


# For in loops are better to use than a while loop
for pet in pets:
  print(pet)


# How to combine lists
first = [1, 2, 3, 4]
first.extend([5, 6, 7])

print(first)

# TO delete a item in a list
del first[1]
print(first)
