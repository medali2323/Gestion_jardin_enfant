import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
const contentHeaders = new HttpHeaders();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json')

//pdf make 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DirecteurService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  public loggedUser: string;
  private URL = "http://localhost:8081"

  public isloggedIn: Boolean = false;
  role: any = []
  roles: any = []
  public t: boolean = false
  constructor(private http: HttpClient, private route: Router) { }
  /*
    logout() { 
      this.isloggedIn= false; this.loggedUser = undefined;
        localStorage.removeItem('loggedUser');
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
         this.route.navigate(['/login']);
         }
         SignIn(user):Boolean{ 
           let validUser: Boolean = false;
           validUser = true;
        this.loggedUser = user.username;
       this.isloggedIn = true;
        localStorage.setItem('loggedUser',this.loggedUser);
         localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
          return validUser; 
        }*/ 
        register2(userdata) {
          return this.http.post(this.URL + '/compte2/', userdata, { headers: this.httpHeaders })
        }  
        gettinfuser() {
          return this.http.get(this.URL + '/compte2/', { headers: this.httpHeaders })
        }  
        putuser2(id, userdata) {
          return this.http.put(this.URL + '/compte2/' + id + "/", userdata, { headers: this.httpHeaders })
        }
  register(userdata) {
    return this.http.post(this.URL + '/register', userdata, { headers: this.httpHeaders })
  }
  login(userdata) {
    console.log(userdata)

    let users: any = []
    let username = userdata["username"]
    console.log(username)
    this.gettalluser().subscribe(res => {
      users = res
      console.log(res)
      let i = 0
      while (users[i]["username"] != username) {
        i++
      }
      if (users[i]["username"] == username) {
        console.log(users[i])
        if (users[i]["is_superuser"] == true) {
          this.role = ["ADMIN"]

        }
        else if (users[i]["is_ens"] == true) {
          this.role = ["ENS"]

        }
        else if (users[i]["is_parent"] == true) {
          this.role = ["parent"]
          localStorage.setItem("p", "true")
          localStorage.setItem("id", users[i].id)


        }
      }
    })
    //localStorage.setItem("isadmin","true")

    return this.http.post(this.URL + '/login', userdata, { headers: this.httpHeaders })

  }
  google(){
    let h = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Content-Type': 'application/xml'});


   return this.http.get("http://127.0.0.1:8888//accounts/google/login/?process=login", { headers:h })
 
  }
  l() {
    let users: any = []
    let username = localStorage.getItem("username")
    console.log(username)
    this.gettalluser().subscribe(res => {
      users = res
      let i = 0
      while (users[i]["username"] != username) {
        i++
      }
      if (users[i]["username"] == username) {
        console.log(users[i])
        if (users[i]["is_superuser"] == true) {
          this.roles = ["ADMIN"]
          console.log(this.roles)
        }
        else if (users[i]["is_ens"] == true) {
          this.roles = ["ENS"]

        }
      }
    })
  }

  gettalluser() {
    return this.http.get(this.URL + '/userlist/', { headers: this.httpHeaders })
  }
  getuser(id) {
    return this.http.get(this.URL + '/userlist/' + id + "/", { headers: this.httpHeaders })
  }
  putuser(id, userdata) {
    return this.http.put(this.URL + '/userlist/' + id + "/", userdata, { headers: this.httpHeaders })
  }
  deleteuser(id) {
    return this.http.delete(this.URL + '/userlist/' + id + "/", { headers: this.httpHeaders })
  }
  looggedin() {
    return !!localStorage.getItem('token')
  }
  isAdmin(): Boolean {
    if (!this.role) //this.roles== undefiened
      return false;


    return (this.role.indexOf('ADMIN') > -1);
  }
  isAdmin2() {
    let users: any = []
    let test: boolean = false
    let username = localStorage.getItem("username")
    console.log(username)
    this.gettalluser().subscribe(res => {
      console.log(res)
      users = res

      let myUser = users.filter(u => u.username == username)[0]
      console.log(myUser)
      if (myUser["is_superuser"]) {
        test = true
        localStorage.setItem("x", "true")
      }
      else if (myUser["is_ens"]) {
        test = false
        localStorage.setItem("x", "false")

      }
      else if (myUser["is_adj"]) {

        localStorage.setItem("adj", "true")
        localStorage.setItem("x", "false")


      }
      else if (myUser["is_parent"]) {

        localStorage.setItem("adj", "false")
        localStorage.setItem("x", "false")
        localStorage.setItem("p", "true")


      }
    })
    return test

  }
  //service enfants

  getallenfs() {
    let JWT = localStorage.getItem("token")
    let h = { headers: new HttpHeaders().set('Authorization', 'Token ' + JWT) }
    return this.http.get(this.URL + '/enfant/getall', h)

  }
  getbyid(id) {
    return this.http.get(this.URL + "/enfant/" + id + "/", { headers: this.httpHeaders })
  }
  ajout(userdata) {
    return this.http.post(this.URL + '/enfant/', userdata, { headers: this.httpHeaders })

  }
  modif(id, userdata) {
    return this.http.put(this.URL + "/enfant/" + id + "/", userdata, { headers: this.httpHeaders })








  }
  supp(id) {
    return this.http.delete(this.URL + "/enfant/" + id + "/")
  }
  rh() {
    return this.http.get(this.URL + '/regimehoraire/getall', { headers: this.httpHeaders })
  }
  rhnyid(id) {
    return this.http.get(this.URL + '/regimehoraire/' + id + "/", { headers: this.httpHeaders })
  }
  //maitresse service 

  modifm(id, userdata) {
    return this.http.put(this.URL + '/maitresse/'  , userdata, { headers: this.httpHeaders })

  }
  deletem(id) {
    return this.http.delete(this.URL + '/maitresse/' + id + "/", { headers: this.httpHeaders })

  }
  registerm(userdata) {
    return this.http.post(this.URL + '/api/maitresse/register/', userdata)
  }

  ajtaitmres(userdata) {
    return this.http.post(this.URL + "/maitresse/", userdata, { headers: this.httpHeaders })
  }
  getmbyid(id) {
    return this.http.get(this.URL + "/maitresse/" + id + "/")

  }
  getm() {
    return this.http.get(this.URL + "/maitresse/getall")

  }
  anneescolaire() {
    return this.http.get(this.URL + "/anneescolaire/getall")
  }
  anneescolairebyid(id) {
    return this.http.get(this.URL + "/anneescolaire/" + id + "/", { headers: this.httpHeaders })
  }
  ajtaneescolaire(userdata) {
    return this.http.post(this.URL + "/anneescolaire/", userdata)
  }
  mdfaneescolaire(id, userdata) {
    return this.http.put(this.URL + "/anneescolaire/" + id + "/", userdata, { headers: this.httpHeaders })
  }
  deleteaneescolaire(id) {
    return this.http.delete(this.URL + "/anneescolaire/" + id + "/", { headers: this.httpHeaders })
  }
  niveau() {
    return this.http.get(this.URL + "/niveau/getall")
  }
  ajtniveau(userdata) {
    return this.http.post(this.URL + "/niveau/", userdata)
  }
  niveaubyid(id) {
    return this.http.get(this.URL + "/niveau/" + id + "/", { headers: this.httpHeaders })

  }


  classe() {
    return this.http.get(this.URL + "/classe/getall")
  }
  ajtclasse(userdata) {
    return this.http.post(this.URL + "/classe/", userdata)
  }


  classebyid(id) {
    return this.http.get(this.URL + "/classe/" + id + "/", { headers: this.httpHeaders })

  }
  modifclasse(id, userdata) {
    return this.http.put(this.URL + "/classe/" + id + "/", userdata, { headers: this.httpHeaders })

  }
  deleteclasse(id) {
    return this.http.delete(this.URL + "/classe/" + id + "/", { headers: this.httpHeaders })

  }
  ajtclub(userdata) {
    return this.http.post(this.URL + "/clubs/", userdata)
  }
  mdfclub(id, userdata) {
    return this.http.put(this.URL + "/clubs/" + id + "/", userdata, { headers: this.httpHeaders })
  }
  seleteclubbyid(id) {
    return this.http.delete(this.URL + "/clubs/" + id + "/", { headers: this.httpHeaders })
  }
  clubbyid(id) {
    return this.http.get(this.URL + "/clubs/" + id + "/", { headers: this.httpHeaders })
  }
  clubs() {
    return this.http.get(this.URL + "/clubs/getall", { headers: this.httpHeaders })
  }
  absenf(userdata) {
    return this.http.post(this.URL + "/abcenceenfant/", userdata)
  }
  putabsenf(id, userdata) {
    return this.http.put(this.URL + "/abcenceenfant/" + id + "/", userdata, { headers: this.httpHeaders })

  }
  suppabsenf(id) {
    return this.http.delete(this.URL + "/abcenceenfant/" + id + "/", { headers: this.httpHeaders })

  }
  getabsenf() {
    return this.http.get(this.URL + "/abcenceenfant/")
  }
  absmait(userdata) {
    return this.http.post(this.URL + "/abcencemaitresse/", userdata)
  }
  putabsmait(id, userdata) {
    return this.http.put(this.URL + "/abcencemaitresse/" + id + "/", userdata, { headers: this.httpHeaders })

  }
  suppabsmait(id) {
    return this.http.delete(this.URL + "/abcencemaitresse/" + id + "/", { headers: this.httpHeaders })

  }
  getabsmait() {
    return this.http.get(this.URL + "/abcencemaitresse/")
  }
  clubsenf() {
    return this.http.get(this.URL + "/clubenf/", { headers: this.httpHeaders })
  }
  aclubsenf(u) {
    return this.http.post(this.URL + "/clubenf/", u, { headers: this.httpHeaders })
  }
  suppclubsenf(id) {
    return this.http.delete(this.URL + "/clubenf/" + id + "/", { headers: this.httpHeaders })
  }
  getclubbyenf(id) {
    return this.http.get(this.URL + "/getclubbyenf/getall" + id + "/", { headers: this.httpHeaders })
  }
  
  activite() {
    return this.http.get(this.URL + "/activite/", { headers: this.httpHeaders })
  }
  aactivite(u) {
    return this.http.post(this.URL + "/activite/", u, { headers: this.httpHeaders })
  }
  suppactivite(id) {
    return this.http.delete(this.URL + "/activite/" + id + "/", { headers: this.httpHeaders })
  }
  getactivite(id) {
    return this.http.get(this.URL + "/activite/" + id + "/", { headers: this.httpHeaders })
  }
  mdfactivite(id,u) {
    return this.http.put(this.URL + "/activite/" + id + "/",u, { headers: this.httpHeaders })
  }
  ajtchage(userdata) {
    return this.http.post(this.URL + "/charge/", userdata)
  }
  charges() {
    return this.http.get(this.URL + "/charge/")
  }
  chargebyid(id) {
    return this.http.get(this.URL + "/charge/" + id + "/", { headers: this.httpHeaders })
  }
  deletechargebyid(id) {
   return this.http.delete(this.URL + "/charge/" + id + "/", { headers: this.httpHeaders })
  }
  mdfchargebyid(id, userdata) {
    return this.http.put(this.URL + "/charge/" + id + "/", userdata, { headers: contentHeaders })

  }
  ajtdocument(userdata) {
    return this.http.post(this.URL + "/documentmaitraisse/", userdata)
  }
  documents() {
    return this.http.get(this.URL + "/documentmaitraisse/")
  }
  documentsbyid(id) {
    return this.http.get(this.URL + "/documentmaitraisse/" + id + "/", { headers: this.httpHeaders })
  }
  mdfdocumentbyid(id, userdata) {
    return this.http.put(this.URL + "/documentmaitraisse/" + id + "/", userdata, { headers: contentHeaders })

  }
  frais() {
    return this.http.get(this.URL + "/frais/")
  }
  fraisbyid(id) {
    return this.http.get(this.URL + "/frais/" + id + "/", { headers: this.httpHeaders })
  }
  modifierfraisbyid(id, data) {
    return this.http.put(this.URL + "/frais/" + id + "/", data, { headers: this.httpHeaders })

  }
  reglement() {
    return this.http.get(this.URL + "/reglement/")
  }
  reglementbyid(id) {
    return this.http.get(this.URL + "/reglement/" + id + "/", { headers: this.httpHeaders })
  }
  reglementbyenf(id) {
    return this.http.get(this.URL + "/reglementenfant/" + id + "/", { headers: this.httpHeaders })
  }
  mdfreglementbyid(id, u) {
    return this.http.put(this.URL + "/reglement/" + id + "/", u, { headers: this.httpHeaders })
  }
  ajtreglement(userdata) {
    return this.http.post(this.URL + "/reglement/", userdata)
  }
  mdfp(userdata) {
    let JWT = localStorage.getItem("token")
    let h = { headers: new HttpHeaders().set('Authorization', 'Token ' + JWT) }

    return this.http.put(this.URL + "/changepassword/", userdata, h)
  }

  envoiFichier(fichierAEnvoyer: File) {
    const formData: FormData = new FormData();
    formData.append('pycejointe', fichierAEnvoyer);
    return this.http
      .post(this.URL + "/charge/", formData, { headers: this.httpHeaders })

  }
}
