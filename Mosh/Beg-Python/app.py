#import pdb
# pdb.run("test")
age = [1, 2, 3, 4, 5, 6, 8, 9,10,11]
needAge = 10
for ages in age:
    print(f'The current age is: {ages}')
    if ages == needAge:
        print(f"We find the desired age: {ages}")
        break
else:
    print(f"The needed age {needAge} is not there.")
