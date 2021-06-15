import random

base  = 3
side  = base*base

# pattern for a baseline valid solution
def pattern(r,c): return (base*(r%base)+r//base+c)%side

# randomize rows, columns and numbers (of valid base pattern)
from random import sample
def shuffle(s): return sample(s,len(s)) 
rBase = range(base) 
rows  = [ g*base + r for g in shuffle(rBase) for r in shuffle(rBase) ] 
cols  = [ g*base + c for g in shuffle(rBase) for c in shuffle(rBase) ]
nums  = shuffle(range(1,base*base+1))

# produce board using randomized baseline pattern
board = [ [nums[pattern(r,c)] for c in cols] for r in rows ]



# for line in board: print(line)


#Generates a valid sudoku puzzle
cnt=0
while(cnt<20):
    x=random.randint(0,8)
    y=random.randint(0,8)
    if(board[x][y]!=0):
        board[x][y]=0
        cnt+=1


# for line in board: print("["+"  ".join(f"{n or '.':{numSize}}" for n in line)+"]")