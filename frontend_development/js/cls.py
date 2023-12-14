# class student:
#     def __init__(self, name, usn, cgpa):
#         self.name=name;
#         self.usn=usn;
#         self.cgpa=cgpa;
    
#     def config(self):
#         print('Student details are:\n',self.name,self.usn,self.cgpa);
# std1 = student('nikhil', 58, 6.5);
# std1.config();

#fun: without return  without argument

# def squre():
#     n=int(input("enter a number"))
#     s=n*n
#     print("squre =", s);

# squre();

# def factorial():
#     n=int(input('Enter the num to cal factorial'))
#     s=1
#     for i in range (1,n+1):
#         s=s*i
#     print('Factorial=',s)
# factorial();

# def sum():
#     n=int(input("enter a number"))
#     s=0
#     for i in range (1,n+1):
#         s=s+i
#     print('sum= ',s);
# sum();

def power(b,e):
    p=b**e
    print('power=', p)

    
def sub(a,b):
    s=a-b
    print('dif=',s)

power(5,2);
power(2,5);

sub(11,20);
sub(20,15);