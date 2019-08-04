import numpy as np

# matrix en autre
array = np.array([[1, 2, 3], [3, 4, 5]])
print(array)
print(array[0, 0])
print(array > 3)
print(array[array > 3])

# Differnece between pure python and numpy
# pure
inch = [1, 2, 3]
cm = [inch*2.54 for inch in inch]
print(cm)

# numpy
dinch = np.array([1, 2, 3])
dcm = dinch*2.54
print(dcm)
