def fizzBuzz(n):
    # Write your code here
    for x in range(1, n+1, 1):
        if (x%5) == 0 and (x%3) == 0:
            print('FizzBuzz')
        elif (x%5) == 0:
            print('Buzz')
            pass
        elif (x%3) == 0:
            print('Fizz')
            pass
        else:
            print(x)
            pass       #print the number 
pass
