class TagCloud:
    def __init__(self):
        self.tags = {}

    # ajouter tags
    def add_tags(self, tag):
        self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1

    # read a tag like this instance["tag"].
    # __getitem__ seems to be on the documentation.
    # In [9]: cloud["python"]
    # Out[9]: 6
    # We can only read only
    def __getitem__(self, tag):
        return self.tags.get(tag.lower(), 0)

    # we need to implement that behavior instance["tag"] = value/count
    # __setitem__ method need to be implemented
    def __setitem__(self, tag, count):
        self.tags[tag.lower()] = count

    # get the lenght of the instance
    def __len__(self):
        return len(self.tags)

    # allow the instance to be iterable.
    def __iter__(self):
        return iter(self.tags)


# Testing the class
cloud = TagCloud()

cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Python")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")
cloud.add_tags("Javascript")

cloud.tags

cloud["python"]

cloud["Javascript"]

cloud["Ruby"] = 6

cloud.tags

cloud["Javascript"] = 7

cloud.tags

cloud["Ruby"] = 7

cloud.tags

cloud.__getitem__("ruby")

cloud.__setitem__("R", 3)

cloud.tags

len(cloud)

# Iteration
for val in cloud:
    print(val, cloud.tags[val])
