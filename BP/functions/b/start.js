## Spawning Stands
execute if entity @a[tag=red] run summon armor_stand spawn.red ~~~
execute if entity @a[tag=blue] run summon armor_stand spawn.blue ~~~
execute if entity @a[tag=green] run summon armor_stand spawn.green ~~~
execute if entity @a[tag=yellow] run summon armor_stand spawn.yellow ~~~
## Spreading Stands
spreadplayers
## TP Players to Stands
tp @a[tag=red] @e[type=armor_stand,name="spawn.red"] 
tp @a[tag=blue] @e[type=armor_stand,name="spawn.blue"] 
tp @a[tag=green] @e[type=armor_stand,name="spawn.green"] 
tp @a[tag=yellow] @e[type=armor_stand,name="spawn.yellow"] 
