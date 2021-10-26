def fizzBuzz(n):
    # Write your code here
    for x in range(1, n+1, 1):
        if (x%5) == 0 and (x%3) == 0: # if both conditions is real
            print('FizzBuzz') # print FizzBuzz
        elif (x%5) == 0: # if this condition is real
            print('Buzz') # print Buzz
            pass
        elif (x%3) == 0: # if this condition is real
            print('Fizz') # print Fizz
            pass
        else: # if none conditions is real
            print(x) #print the number only
            pass       
pass
