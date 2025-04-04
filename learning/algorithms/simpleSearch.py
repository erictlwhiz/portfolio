def simpleSearch(array, target):
    """
    Perform a simple linear search on the array to find the target.

    :param array: List of elements to search through
    :param target: The element to search for
    :return: Index of the target element if found, otherwise -1
    """
    for index, element in enumerate(array):
        if element == target:
            return index
    return -1

if __name__ == "__main__":
    target = 5
    array = [1, 2, 5, 4, 3]
    print(f"Array: {array}")
    result = simpleSearch(array, target)
    if result == -1:
        print("Target value not found in the array.")
    else:
        print(f"Target value: {target}")
        print(f"Index of target value: {result}")