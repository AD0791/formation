class TagCloud:
    def __init__(self):
        self.tags = {}

    # ajouter tags
    def add_tags(self, tag):
        self.tags[tag] = self.tags.get(tag, 0) + 1
