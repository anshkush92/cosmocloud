## Interface

![Create interface like this](https://res.cloudinary.com/dicbnntfh/image/upload/v1681845578/spotify-clone/task_jcilf4.png)

## Demo

1. Link
2. [Video](https://youtu.be/0Up4vv2GGnM)

## Task

- [x] Create such component
      ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847287/spotify-clone/task_kunepm.png)
- [x] Should be able to render interface if some form of data is given
      ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847464/spotify-clone/task_d1nk5g.png)
- [x] User should be able to edit name of a field
      Original
      ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847287/spotify-clone/task_kunepm.png)

New
![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847672/spotify-clone/task_ksu0zd.png)

- [x] User should be able to add more fields
      Original
      ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847287/spotify-clone/task_kunepm.png)

New
![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847777/spotify-clone/task_a95wgz.png)

- [x] User should be able to delete a field
      Original
      ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847287/spotify-clone/task_kunepm.png)

New - Person field got deleted
![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847836/spotify-clone/task_pk0mfm.png)

- [x] Users should be able to add nested fields to object type.
      Original
      ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847287/spotify-clone/task_kunepm.png)

New
![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681847975/spotify-clone/task_t5go43.png)

- [x] There should be a save button which console the updated data - **_Enter key works as the save button_**
      ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681848069/spotify-clone/task_dweheq.png)

<hr>

## Guideline

1. Assume a Schema for this, how you will represent this data. Write that down.

> Schema for the above interface - Follows recursion as you can see that the nested rows have items[]
> ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681845847/spotify-clone/task_ismasa.png)

2. Write down how you will handle this, what components you will create.
   `C - represents the component that I have divided into`
   ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681846081/spotify-clone/task_t8m0ff.png)

`To understand the component structure better, I have marked which components refers to which in the code. C1 - C1 - row like this for every other component`

![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681846233/spotify-clone/task_qcdms3.png) 4. Start small. Create a component which can render this data.
`First I started with creating all the components, then combining it together with the help of the redux`

5. Add editable input field and update the data
   `I used redux to manage the state of the app, and use the reducers to change the state of the row`

6. Add a way to add more rows
   `To add more rows, first we have have to know the parentIndex where we have to add the child, we find the parentIndex by recursion. After we know the index, we just have to push the child/nested Row in the parent items[].`

![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681846631/spotify-clone/task_ggxyep.png)

8. Add a way to delete rows
   `To delete the row, we need to find the ID of the row which we have to delete in the tree, which can be easily done through recursion`
   ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681846765/spotify-clone/task_rtbn1y.png)

9. Add a way to update the data in the rows
   `To update the data, we find need to find the ID of the row to which we want to perform the update which can be easily done through recursion, then the data is updated with the help of the reducers `
   ![enter image description here](https://res.cloudinary.com/dicbnntfh/image/upload/v1681846869/spotify-clone/task_ubsitp.png)
