from pprint import pprint
sentence = "This is a common interview question"


def word_count(word):
    char = {}
    for mo in sentence:
        if mo in char:
            char[mo] += 1
        else:
            char[mo] = 1
    # pprint(char)
    return char


sorted(word_count(sentence).items(),
       key=lambda kv: kv[1], reverse=True)[0]
