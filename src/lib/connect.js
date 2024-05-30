const {usernamedb,password,database} = process.env

// export const connectionString = "mongodb+srv://"+usernamedb+":"+password+"@nextapipractice.x10tzhi.mongodb.net/"+database+"?retryWrites=true&w=majority&appName=nextapipractice"

export const connectionString = `mongodb+srv://${usernamedb}:${password}@nextapipractice.x10tzhi.mongodb.net/${database}?retryWrites=true&w=majority&appName=nextapipractice`