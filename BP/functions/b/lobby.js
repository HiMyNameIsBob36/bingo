## RED
execute at @a if block ~~-1~ red_concrete run tellraw @s[tag=!red] {"rawtext":[{"text":"§lGAME §r§s>> §rJlined §cRED§r team."}]}
execute at @a if block ~~-1~ red_concrete run tag @s add red
execute at @a if block ~~-1~ red_concrete run tag @s remove blue
execute at @a if block ~~-1~ red_concrete run tag @s remove green
execute at @a if block ~~-1~ red_concrete run tag @s remove yellow
## BLUE
execute at @a if block ~~-1~ red_concrete run tellraw @s[tag=!blue] {"rawtext":[{"text":"§lGAME §r§s>> §rJlined §1BLUE§r team."}]}
execute at @a if block ~~-1~ red_concrete run tag @s add blue
execute at @a if block ~~-1~ red_concrete run tag @s remove red
execute at @a if block ~~-1~ red_concrete run tag @s remove green
execute at @a if block ~~-1~ red_concrete run tag @s remove yellow
## GREEN
execute at @a if block ~~-1~ red_concrete run tellraw @s[tag=!green] {"rawtext":[{"text":"§lGAME §r§s>> §rJlined §1GREEN§r team."}]}
execute at @a if block ~~-1~ red_concrete run tag @s add green
execute at @a if block ~~-1~ red_concrete run tag @s remove red
execute at @a if block ~~-1~ red_concrete run tag @s remove blue
execute at @a if block ~~-1~ red_concrete run tag @s remove yellow
## YELLOW
execute at @a if block ~~-1~ red_concrete run tellraw @s[tag=!yellow] {"rawtext":[{"text":"§lGAME §r§s>> §rJlined §eYELLOW§r team."}]}
execute at @a if block ~~-1~ red_concrete run tag @s add yellow
execute at @a if block ~~-1~ red_concrete run tag @s remove red
execute at @a if block ~~-1~ red_concrete run tag @s remove blue
execute at @a if block ~~-1~ red_concrete run tag @s remove green

