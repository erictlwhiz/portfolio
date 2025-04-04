def binarySearch(target, lst):
    """
    Perform a binary search on a sorted list to find the index of a target value.

    :param lst: A sorted list of elements to search.
    :param target: The value to search for in the list.
    :return: The index of the target value in the list, or -1 if not found.
    """
    low = 0
    high = len(lst) - 1

    while low <= high:
        mid = (low + high) // 2
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1
if __name__ == "__main__":
    target = 5
    lst = [1, 2, 3, 4, 5]
    lst.sort()  # Ensure the list is sorted
    print(f"Sorted list: {lst}")
    result = binarySearch(target, lst)
    if result == -1:
        print("Target value not found in the list.")
    else:
        print(f"Target value: {target}")
        print(f"Index of target value: {result}")