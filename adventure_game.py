print('Ah ha ha! ')
print('welcome to the haunted house: AN ADVENTURE YOU WOULD NOT WANT TO MISS ')
print()
print('you are currently in a kitchen, there are three items on the kitchen table. Pick 1:TRESURE, KEY OR HAMMER ')
print()
choice = input('choose an item ')
choice = str(choice)
if choice.upper() == 'TREASURE':
    print('you are in a dark room, there is a torch and match ')
    choice = input('PICK TORCH OR MATCH ')
    choice = str(choice)
    if choice.upper() == 'TORCH':
        print('the room lights up, there is a snake and shelther to hide ')
        choice = input('FIGHT SNAKE OR HIDE ')
        choice = str(choice)
        if choice.upper() == 'FIGHT SNAKE':
            print('YOU ARE STRONG!!! ')
        elif choice.upper() == 'HIDE':
            print('YOU CAN DO BETTER!!! ')
        else:
            print('invalid answer ')
    elif choice.upper() == 'MATCH':
        print('a huge hole appears ')
        choice = input('ENTER HOLE OR WAIT ')
        choice = str(choice)
        if choice.upper() == 'ENTER HOLE':
            print('YOU ARE NOW IN THE HALLWAY!!! ')
        elif choice.upper() == 'WAIT':
            print('DEMOTED TO THE KITCHEN ')
        else:
            print('invalid answer ')
    else:
        print('invalid answer')           
elif choice.upper() == 'KEY':
    print('the door is now open ')
    choice = input('DO YOU WANT TO STAY OR LEAVE ')
    choice = str(choice)
    if choice.upper() == 'LEAVE':
        print('you are now in the hallway and a monster appears ')
        choice = input('FIGHT OR RUN ')
        choice = str(choice)
        if choice.upper() == 'FIGHT':
            print('YOU WIN!!! ')
        elif choice.upper( ) == 'RUN':
            print('YOU LOSE!!! ')
        else:
            print('invalid answer ')
    elif choice.upper() == 'STAY':
        print('YOU SEE A SHADOW ')
        choice = input('DO YOU WANT TO APPROACH OR NEGLECT ')
        choice = str(choice)
        if choice.upper() == 'APPROACH':
            print('GAME OVER!!! ')
        elif choice.upper() == 'NEGLECT':
            print('GOOD LUCK PLAY NEXT TIME ')
        else:
            print('invalid answer ')
    else:
            print('invalid answer ')         
elif choice.upper() == 'HAMMER':
    print('tunnel A and tunnel B opens ')
    choice = input('FOLLOW TUNNEL A OR FOLLOW TUNNEL B ')
    choice = str(choice)
    if choice.upper() == 'FOLLOW TUNNEL A':
        print('you are now in the tunnel, and you see a dragon ')
        choice = input('HIDE OR RUN ')
        choice = str(choice)
        if choice.upper() == 'HIDE':
            print('YOU LOSE ONE LIFE!!! ')
        elif choice.upper( ) == 'RUN':
            print('YOU ARE OUT OF THE HAUNTED HOUSE!!! ')
        else:
            print('invalid answer ')
    elif choice.upper() == 'FOLLOW TUNNEL B':
        print('you see a monkey ')
        choice = input('DO YOU WANT TO FOLLOW OR NEGLECT MONKEY ')
        choice = str(choice)
        if choice.upper() == 'FOLLOW MONKEY':
            print('CONGRATULATIONS, YOU ARE NOW IN STAGE TWO!!! ')
        elif choice.upper() == 'NEGLECT MONKEY':
            print('SORRY, PLEASE TRY AGAIN!!! ')
        else:
            print('invalid answer ')
    else:
        print('invalid answer')
else:
    print('invalid answer')

        

    


