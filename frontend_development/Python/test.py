class Person:
    
    species = "Human"

    
    def __init__(self, name, age):
        
        self.name = name
        self.age = age

    def describe(self):
        return f"{self.name} is {self.age} years old"

   
    def greet(self):
        return f"Hello, my name is {self.name}"



person1 = Person("Suresh", 30)
person2 = Person("Sushma", 25)
person3 = Person("Rakesh", 25)


print(person1.describe())  
print(person2.greet())     
print(person3.greet())     

