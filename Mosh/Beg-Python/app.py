class Product:

    def __init__(self, price):
        # we can use price like a regular property now
        self.price = price

    # getter
    @property
    def price(self):
        return self.__price

    # setter
    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("can't be negative number")
        self.__price = value


prix = Product(10)
