import '../Styles/main.css';
import {Link} from 'react-router-dom'

function About( ){
   return(
      <main>
<div className='about_me'>
         <h2 >About me:</h2>
            <p>My name is Alexey Levitsky.I'm PreFullstacker(frontend+DevOps) .</p>
            <a href="https://github.com/AlexRoot00">My GitHub</a>
            <p>all information to contact me in the <Link to="/Contacts" className="nav_link"> Contacts tab</Link></p>
            <h3>My stacks:</h3>
               <p>HyperVisors:</p> 
               <p>- Proxmox/VMware Esxi(6.7-7.x)/VMware Workstation/HyperV</p>       
               <p>Containers:</p>
               <p>LXC(Proxmox / Docker(single node/swarm))</p>
               <p>Linux:</p>
                  <p>Deb:Ubuntu/debian</p>
                  <p>Rpm:Centos7/8/Almalinux / Fedora Server/Workstation </p>
               <p>Windows OS:Windows Server(2008-2019),Windows Workstation(7-11)</p>
               <p>Software stack:Ansible,Terraform,Bash,vagrant,ReactJS,Nginx/Apache,Postgresql/Mysql/Mssql</p>
               <p>Hardware stack: SuperMicro,Mikrotik,Dell-servers </p>
               <p>Language:</p>
               <p>RU:native</p>
               <p>EN:prebeginner</p>
               <p>JP:N5</p>
         </div>
         </main>
   ); 
}
export default About;