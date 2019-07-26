def calculate(num):
    if num <= 0:
        raise ValueError("Number can't be 0 or less")
    return 10 / num


try:
    calculate(-1)
except ValueError as e:
    print(e)
else:
    print("No error")
