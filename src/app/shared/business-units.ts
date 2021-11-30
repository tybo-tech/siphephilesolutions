export interface BusinessUnit {
  Id: string;
  Name: string;
  Intro: string;
  Body?: string;
  Body2?: string;
  Mission?: string;
  Vision?: string;
  Keys?: string;
  Believe?: string;
  Motto?: string;
  Hide?: boolean;
  Image: string;
  Class: string[];
}
export const BusinessUnits: BusinessUnit[] = [
  {
    Id: 'SCAFFOLD-SYSTEMS',
    Name: `SCAFFOLD SYSTEMS`,
    Intro: `
        

        <b>
        Siphephile Scaffolding Solutions
      </b>
      
      makes use of two main scaffolding systems: <br>
      <b>Kwikstage scaffold</b> is a Modular System which is the most commonly used scaffold in South Africa due to the systems
      flexibility, strength and ease to install and dismantle.
      <br>
      <b> Layher Allround</b> scaffolding has become established on
      the market as a synonym for modular scaffolding. With its superior technology, the Allround connector has superseded conventional scaffolding connection
      techniques.        
        `,
    Image: `assets/images/one.png`,
    Class: ['sky']
  },





  {
    Id: 'ALUMINIUM-ACCESS-TOWERS',
    Name: `ALUMINIUM ACCESS TOWERS`,
    Intro: `
     
  <b>Siphephile Scaffolding Solutions (Pty) Ltd</b>also provides Aluminium access towers – lightweight, high tensile
  aluminium tower systems designed for fast & easy assembly. They are easy to store and to transport. This is the
  perfect low-maintenance access solution for all of your painting, renovating, electrical and general maintenance
  requirements.
  <br>
  <b>Siphephile Scaffolding
    Solutions (Pty) Ltd offers you –
    A</b> <br>

  A highly skilled and trained workforce to erect and sign off all
  Aluminum Towers complete with a “Scaffold Safe to Use” tag.
        
        `,
    Image: `assets/images/lumi.png`,
    Class: ['white']
  }




  ,
  



  {
    Id: 'INDUSTRIAL-ROPE-ACCESS',
    Name: `INDUSTRIAL ROPE ACCESS`,
    Intro: `
     
  <b>Siphephile Scaffolding Solutions</b> ahas an independent rope access division, providing fully qualified and competent rope access technicians to all aspects of South Africa’s construction and mining industries.
  Our fully qualified rope access technicians are skilled in all manner of tasks, allowing them to
  perform a number of skills and trades whilst suspended at high altitude.
        
        `,
    Image: `assets/images/robe.png`,
    Class: ['robe']
  }




,


{
  Id: 'ENGINEERED-SCAFFOLD',
  Name: `ENGINEERED SCAFFOLD DESIGN AND C.A.D. SMART SCAFFOLDER DESIGN`,
  Intro: `
  Siphephile Scaffolding Solutions can provide structural 
  engineered designed scaffolds with full engineers sign off certificate as per client’s request,
   working alongside our clients to provide the right scaffold solution for them at all times.
      
      `,
  Image: `assets/images/pp.png`,
  Class: ['pp']
}

,


{
  Id: 'EVENTS-STAGES',
  Name: `EVENTS STAGES`,
  Intro: `
  Siphephile Scaffolding Solutions (PTY) LTD also 
  provide the stage scaffolding we contract any type of stage. We have a very reliable and experienced team, the equipment that were using is SABS approved. There is no big or small project to us as we can offer our services either
   it a client birthday or private events. We also provide barriers which are usually use to control the crowd.
      `,
  Image: ``,
  Class: ['white']
}
,

{
  Id: '',
  Name: ``,
  Intro: `
  `,
  Image: `assets/images/stage.png`,
  Class: ['white']
}

]