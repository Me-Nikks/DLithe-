# def STD(input_string):
    
#     words = input_string.split()

    
#     dictionary = {}

#     # Assigning keys to words starting from 1
#     for x, word in enumerate(words, 1):
#         dictionary[x] = word

#     return dictionary

# # Taking string input from the user
# user_input = input("Enter a sentence: ")

# # Converting the input string to a dictionary with keys based on word positions
# result_dict = STD(user_input)

# # Displaying the dictionary
# print("Dictionary:")
# for key, value in result_dict.items():
#     print(f"{key}: {value}")
string=input("Enter you string\n").split()
dictionary={}
for i in range(len(string)):
    dictionary[i]=string[i]
print(dictionary)
