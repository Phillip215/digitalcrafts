digitalCraftsStudent = {
    "name": "Phill",
    "city": "Philadelphia",
    "computer": "asus",

}
# Print out your computer information into the terminal
# print(digitalCraftsStudent["computer"])

gamer = {
    "platform": "ps4",
    "gamingHours": [{"weekday": "8-10"}, {"weekends": "anytime"}],
    "skill": 'Goat'
}
# print on the terminal what time you would game

# print(gamer["gamingHours"][0]["weekday"])

# 1. print out a list of engine choices (the whole list)
# 2. print out the horsepower values only (all of them)
# 3. check to see if the value "trim" exist on the car dictionary
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings)
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value

car = {
    "model": "",
    "image": "https://go.nature.com/3cAdw8T",
    "year": "",
    "engineChoices": [

        {
            "v4": {
                "horsepower": 230
            }
        },
        {
            "v6": {
                "horsepower": 300
            }
        },
        {
            "v8": {
                "horsepower": 400
            }
        },
        {
            "v12": {
                "horsepower": 900
            }
        }
    ],

}

print(car["engineChoices"])
print(car["engineChoices"][0]["v4"]["horsepower"])
print(car["engineChoices"][1]["v6"]["horsepower"])
print(car["engineChoices"][2]["v8"]["horsepower"])
print(car["engineChoices"][3]["v12"]["horsepower"])
if "trim" in car:
  print("It is")
else:
  print("nope")
car["colors"] = ["grey", "blue", "red", "black"]
print(car)
