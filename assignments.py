# # Different type of print statements
# #assignment 2

# #print function
# print('enter your name') 

# # Formatted String 
# name = "Sham"
# age = 25
# print(f"My name is {name} and I'm {age} years old.")

# # Concatenation
# gold = 5
# silver = 10
# print("The value of gold is " + str(gold) + " and silver is " + str(silver))

# # Multiple arguments in print
# x = 10
# y = 20
# print("The value of x is", x, "and y is", y)

# # using end 
# print("Hello, ", end='')
# print("Team!")









#reversing a string
#assignment 6

# text = input('enter your string')
# words = text.split()  
# print(words)
# print(type(words)) 
# words.reverse()
# reversed_text = ' '.join(words) # Join the reversed words to form a string
# print('Reversed String is\n', reversed_text)
# print(type(reversed_text))

# Capitalize the 1st character in each sentence and add It to the dictionary
# Assignment 3 

# text = input('enter your sentence')
# # caps = text.capitalize()
# caps = text.title() 
# print(caps)
# words = caps.split()
# l = len(text)

# my_dict = {}
# keys = []


# for i in range(1, l +1):
#     keys.append(i)

# my_dict=dict(zip(keys,words))
# print(my_dict)


    



# # Remove the special characters, full stop etc. from the sting statement
# # assignment 1

# def remove_special_characters(input_string):
#     result_string = ''
#     for char in input_string:
#         if ('A' <= char <= 'Z') or ('a' <= char <= 'z') or ('0' <= char <= '9') or char == ' ':
#             result_string += char
#     return result_string


# text = input('Enter a string: ')


# cleaned_text = remove_special_characters(text)

# print("Original String:", text)
# print("Cleaned String:", cleaned_text)




