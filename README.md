# safe-rabbit-mq-management

This repository is initially intended for the Delivery team's daily ops tilling duties. It allows use the Rabbit MQ Management webapp while hiding dangerous features such as 'delete queue'.

# Installation instructions
* Pull the repo
* Navigate to chrome://extensions/
* Hit Load Unpacked
* Open the folder pulled in step 1
* Need to refresh the rabbit MQ console if its already open

![image](https://github.com/user-attachments/assets/74cb77f8-9d4f-4b39-8e07-7a4d7a38f6b7)


# Features
* Hide 'delete queue' always
* Hide 'purge queue' for production queues
* suggest xxx_production queue in the move messages form
