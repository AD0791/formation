import sys
# absolute import
from ecommerce.customer import contact
# relative import
# from ..customrt import contact


def hello():
    print("from sales")


def classico():
    print("from sales")


print(sys.path)

contact.contact_info()
