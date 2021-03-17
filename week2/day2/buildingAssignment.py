
  class Build:
    def __init__(self, height, capacity, sqft, residential, commercial):
      self.height = height
      self.capacity = capacity
      self.sqft = sqft
      self.residential = residential
      self.commercial = commercial

    def userInput(self):
      building = input("")
