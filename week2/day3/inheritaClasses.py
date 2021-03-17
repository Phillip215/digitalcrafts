class Currency:
  def __init__(self, name, homeNationCurrency, price):
    self.name = name
    self.homeNationCurrency = homeNationCurrency
    self.price = price

  def printCurrency(self):
    print(f"""
  {self.name}
  {self.homeNationCurrency}
  {self.price}""")


yen = Currency("Yen", "Japan", 30,)
yen.printCurrency()

class Huh(Currency):
  pass

moneys = Huh("My", "mind", 0)
print(f"My mind is on {moneys.price}")
