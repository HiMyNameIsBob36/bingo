## RED
execute as @a at @s if block ~~-1~ red_concrete run tellraw @s[tag=!red] {"rawtext":[{"text":"§lGAME §r§s>> §l§rJoined §cRED§r team."}]}
execute as @a at @s if block ~~-1~ red_concrete run tag @s add red
execute as @a at @s if block ~~-1~ red_concrete run tag @s remove blue
execute as @a at @s if block ~~-1~ red_concrete run tag @s remove green
execute as @a at @s if block ~~-1~ red_concrete run tag @s remove yellow
## BLUE
execute as @a at @s if block ~~-1~ light_blue_concrete run tellraw @s[tag=!blue] {"rawtext":[{"text":"§lGAME §r§s>> §l§rJoined §bBLUE§r team."}]}
execute as @a at @s if block ~~-1~ light_blue_concrete run tag @s add blue
execute as @a at @s if block ~~-1~ light_blue_concrete run tag @s remove red
execute as @a at @s if block ~~-1~ light_blue_concrete run tag @s remove green
execute as @a at @s if block ~~-1~ light_blue_concrete run tag @s remove yellow
## GREEN
execute as @a at @s if block ~~-1~ lime_concrete run tellraw @s[tag=!green] {"rawtext":[{"text":"§lGAME §r§s>> §rJoined §l§2GREEN§r team."}]}
execute as @a at @s if block ~~-1~ lime_concrete run tag @s add green
execute as @a at @s if block ~~-1~ lime_concrete run tag @s remove red
execute as @a at @s if block ~~-1~ lime_concrete run tag @s remove blue
execute as @a at @s if block ~~-1~ lime_concrete run tag @s remove yellow
## YELLOW
execute as @a at @s if block ~~-1~ yellow_concrete run tellraw @s[tag=!yellow] {"rawtext":[{"text":"§lGAME §r§s>> §rJoined §l§eYELLOW§r team."}]}
execute as @a at @s if block ~~-1~ yellow_concrete run tag @s add yellow
execute as @a at @s if block ~~-1~ yellow_concrete run tag @s remove red
execute as @a at @s if block ~~-1~ yellow_concrete run tag @s remove blue
execute as @a at @s if block ~~-1~ yellow_concrete run tag @s remove green

