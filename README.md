# Petful Client

#Live-Link Client: https://petful-client-xi.vercel.app/
#Live-Link Server: https://gentle-lowlands-66849.herokuapp.com/
#GitHub Server: https://github.com/thinkful-ei-narwhal/Petful-Isaac-Tyler-Server
#Pair: Isaac Elesia && Tyler Sharp
#Summary: Users can select pets for adoption. One user at a time may adopt, and the results are live!
#Tech: React, Node, HTML, CSS, Javascript
# User Stories

1. As a pet lover, I want to visit the FIFO pet adoption site
   so that I can get more information about the adoption process.

Acceptance criteria

When I go to the FIFO adoption agency site

- I see a description of the adoption process.
- I see a meaningful picture related to the description.
- I see a button for starting the adoption process.

2. (Complete) As a user interested in adopting pets, I want to get more information
   on each pet so that I can make an informed decision about who to adopt.

Acceptance criteria

When I visit the adoption page, I can see:

- An image of the pet;
- A physical description of the pet;
- The pet's name, gender, age, and breed.
- A story of the pet's journey to the shelter

3. (Complete) As a user interested in adopting pets,
   I want to see the pets that I can adopt.

Acceptance criteria

When I visit the adoption page, I can only see the
pet that is next in line to be adopted.

4. As a user interested in adopting pets, I want to get in line to adopt.

Acceptance criteria

When I visit the adoption page:

- I can see a list of other people currently in line (Yes).
- I can submit my name and be added to the end of the line (Yes).
- When I am not at the beginning of the line, I cannot see an option to adopt a pet.
- For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line (Yes).
- Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear(Yes).
- When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.

5. As a user interested in adopting pets, I want to adopt a pet.

Acceptance criteria

When I am at the front of the line:

- I can see an option to adopt a pet.
- When I choose to adopt a pet:
- I see a confirmation that I have adopted the pet.
- I see my name removed from the line.
- I see the pet I adopted is removed from view and replaced with another pet.
