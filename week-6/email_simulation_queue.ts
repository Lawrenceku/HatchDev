const QUEUE_lLIMIT = 1000
const Q: string[] = []
const resp:any = get5000Users()


resp.forEach((email: string){
    Q.push(email)
})