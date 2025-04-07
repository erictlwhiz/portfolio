# A decorator in Python is a function that takes another function as input and extends or modifies its behavior
# without changing the original function's code. Decorators are often used to add reusable functionality to functions
# or methods, such as logging, access control, or argument preprocessing.
#
# Syntax:
# - A decorator is applied to a function using the "@" symbol followed by the decorator name.
# - The decorator wraps the original function, allowing you to execute code before or after the function call.
#
# Example:
# @decorator_name
# def some_function():
#     ...
#
# In this file, the `@square_args` decorator modifies the behavior of the function it decorates by squaring
# its arguments before passing them to the original function.

def square_args(func):
    def inner(a, b):
        return func(a ** 2, b ** 2)
    return inner

# Example usage
@square_args
def multiply(a, b):
    return a * b

print(multiply(3, 9))  # This will compute (2^2) * (3^2) = 4 * 9 = 36