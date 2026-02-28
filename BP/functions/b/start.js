## Spawning Stands
execute if entity @a[tag=red] at @e[type=armor_stand,name="spawn.lobby"] run summon armor_stand spawn.red ~~~
execute if entity @a[tag=blue] at @e[type=armor_stand,name="spawn.lobby"] run summon armor_stand spawn.blue ~~~
execute if entity @a[tag=green] at @e[type=armor_stand,name="spawn.lobby"] run summon armor_stand spawn.green ~~~
execute if entity @a[tag=yellow] at @e[type=armor_stand,name="spawn.lobby"] run summon armor_stand spawn.yellow ~~~
## Spreading Stands
execute at @e[type=armor_stand,name="spawn.lobby"] run spreadplayers ~ ~ 50 100 @e[r=1,type=armor_stand,tag=!lock]
## TP Players to Stands
tp @a[tag=red] @e[type=armor_stand,name="spawn.red"] 
tp @a[tag=blue] @e[type=armor_stand,name="spawn.blue"] 
tp @a[tag=green] @e[type=armor_stand,name="spawn.green"] 
tp @a[tag=yellow] @e[type=armor_stand,name="spawn.yellow"] 
## Tag 'playing'
tag @a[tag=red] add playing
tag @a[tag=blue] add playing
tag @a[tag=green] add playing
tag @a[tag=yellow] add playing
## Items
## give @a[tag=playing] iron_armor
