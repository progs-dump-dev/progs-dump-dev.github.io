import{S as we,i as de,s as ue,e as o,t as l,k as E,c as r,a as h,h as s,d as t,m as T,f as ge,g as i,H as n,n as te}from"../../chunks/index-3d24b05e.js";function ye(me){let f,q,H,u,j,O,x,C,I,P,g,z,Q,p,y,B,G,c,K,R,N,Y,U,v,J,A,m,b,V,W,k,X,D,w,S,Z,$,_,ee,M;return{c(){f=o("h1"),q=l("Spawnflags"),H=E(),u=o("h3"),j=l("Trigger Spawned Monsters"),O=l(`\r
The most requested feature of any general purpose Quake mod is trigger spawned monsters. This makes spawning monsters much easier than in the original game. All you need to do is select the Trigger Spawn flag and target the monster with any trigger when you want them to appear. Ambush (from vanilla Quake), will prevent the selected monster from being \u201Cawakened\u201D by other monsters nearby. Errant gunfire or seeing the player will wake them up. No Sight Sound will suppress the monster\u2019s \u201Cwake up\u201D sound. (e.g. a Shambler will not roar when it sees the player.) You can make passive monsters that will never respond to the player\u2019s actions by selecting Passive always or allow them to wake up and fight with the Passive until attacked spawnflag.\r
`),x=o("br"),C=l(`\r
Starting in version 3.0.0 use the Spawn Silently flag to suppress visual and sound effects when a monster trigger spawns. In previous versions, this was enabled with the wait 1 key | value pair. This will still work but has been removed from the FGDs.\r
`),I=o("br"),P=E(),g=o("h3"),z=l("Appearance Flags"),Q=l(`\r
Nearly every entity in the devkit has an expanded set of \u201CAppearflags\u201D compared to vanilla Quake. These new flags allow you to customize what shows up in a specific mode of the game.\r
`),p=o("ul"),y=o("li"),B=l("4096   	Not in Coop"),G=E(),c=o("li"),K=l("8192   	Not in Single Player"),R=E(),N=o("li"),Y=l("32768  Not on Hard Only"),U=E(),v=o("li"),J=l("65536  Not on Nightmare Only"),A=l(`\r
\r
Spawnflag 16384 is not used here because it's already used for something else in progs_dump.\r
\r
\r
The new spawnflags complement and complete the set of built-in spawnflags provided by the engine, which of course are:\r
\r
256    	Not on Easy\r
512    	Not on Normal\r
1024   	Not on Hard or Nightmare\r
2048   	Not in Deathmatch\r
\r
In conjunction with the old spawnflags, the new spawnflags make it possible to exclude any entity from any combination of game modes and/or skill levels.\r
\r
`),m=o("h3"),b=o("em"),V=l("Not in Coop"),W=l(" and "),k=o("em"),X=l("Not in Single Player"),D=l(`\r
\r
These spawnflags were inspired by Quoth 2 (Kell and Necros, 2008), which included two additional spawnflags for all entities: Not in Coop and Coop Only.  In contrast to Quoth 2, the spawnflags implemented here are Not in Coop and Not in Single Player, for symmetry with the built-in Not in Deathmatch spawnflag.\r
\r
`),w=o("h3"),S=o("em"),Z=l("Not on Hard Only"),$=l(" and "),_=o("em"),ee=l("Not on Nightmare Only"),M=l(`\r
\r
The set of built-in spawnflags doesn't allow a mapper to treat the Hard and Nightmare skill levels differently, because it only includes one spawnflag, 1024, which excludes an entity from both Hard and Nightmare. The new Not on Hard Only and Not on Nightmare Only spawnflags allow the mapper to exclude an entity from one of these skill levels without affecting the other. The original spawnflag will supersede the new flags.`),this.h()},l(e){f=r(e,"H1",{});var a=h(f);q=s(a,"Spawnflags"),a.forEach(t),H=T(e),u=r(e,"H3",{});var ne=h(u);j=s(ne,"Trigger Spawned Monsters"),ne.forEach(t),O=s(e,`\r
The most requested feature of any general purpose Quake mod is trigger spawned monsters. This makes spawning monsters much easier than in the original game. All you need to do is select the Trigger Spawn flag and target the monster with any trigger when you want them to appear. Ambush (from vanilla Quake), will prevent the selected monster from being \u201Cawakened\u201D by other monsters nearby. Errant gunfire or seeing the player will wake them up. No Sight Sound will suppress the monster\u2019s \u201Cwake up\u201D sound. (e.g. a Shambler will not roar when it sees the player.) You can make passive monsters that will never respond to the player\u2019s actions by selecting Passive always or allow them to wake up and fight with the Passive until attacked spawnflag.\r
`),x=r(e,"BR",{}),C=s(e,`\r
Starting in version 3.0.0 use the Spawn Silently flag to suppress visual and sound effects when a monster trigger spawns. In previous versions, this was enabled with the wait 1 key | value pair. This will still work but has been removed from the FGDs.\r
`),I=r(e,"BR",{}),P=T(e),g=r(e,"H3",{});var ae=h(g);z=s(ae,"Appearance Flags"),ae.forEach(t),Q=s(e,`\r
Nearly every entity in the devkit has an expanded set of \u201CAppearflags\u201D compared to vanilla Quake. These new flags allow you to customize what shows up in a specific mode of the game.\r
`),p=r(e,"UL",{style:!0});var d=h(p);y=r(d,"LI",{});var le=h(y);B=s(le,"4096   	Not in Coop"),le.forEach(t),G=T(d),c=r(d,"LI",{});var se=h(c);K=s(se,"8192   	Not in Single Player"),se.forEach(t),R=T(d),N=r(d,"LI",{});var oe=h(N);Y=s(oe,"32768  Not on Hard Only"),oe.forEach(t),U=T(d),v=r(d,"LI",{});var re=h(v);J=s(re,"65536  Not on Nightmare Only"),re.forEach(t),d.forEach(t),A=s(e,`\r
\r
Spawnflag 16384 is not used here because it's already used for something else in progs_dump.\r
\r
\r
The new spawnflags complement and complete the set of built-in spawnflags provided by the engine, which of course are:\r
\r
256    	Not on Easy\r
512    	Not on Normal\r
1024   	Not on Hard or Nightmare\r
2048   	Not in Deathmatch\r
\r
In conjunction with the old spawnflags, the new spawnflags make it possible to exclude any entity from any combination of game modes and/or skill levels.\r
\r
`),m=r(e,"H3",{});var L=h(m);b=r(L,"EM",{});var ie=h(b);V=s(ie,"Not in Coop"),ie.forEach(t),W=s(L," and "),k=r(L,"EM",{});var he=h(k);X=s(he,"Not in Single Player"),he.forEach(t),L.forEach(t),D=s(e,`\r
\r
These spawnflags were inspired by Quoth 2 (Kell and Necros, 2008), which included two additional spawnflags for all entities: Not in Coop and Coop Only.  In contrast to Quoth 2, the spawnflags implemented here are Not in Coop and Not in Single Player, for symmetry with the built-in Not in Deathmatch spawnflag.\r
\r
`),w=r(e,"H3",{});var F=h(w);S=r(F,"EM",{});var pe=h(S);Z=s(pe,"Not on Hard Only"),pe.forEach(t),$=s(F," and "),_=r(F,"EM",{});var fe=h(_);ee=s(fe,"Not on Nightmare Only"),fe.forEach(t),F.forEach(t),M=s(e,`\r
\r
The set of built-in spawnflags doesn't allow a mapper to treat the Hard and Nightmare skill levels differently, because it only includes one spawnflag, 1024, which excludes an entity from both Hard and Nightmare. The new Not on Hard Only and Not on Nightmare Only spawnflags allow the mapper to exclude an entity from one of these skill levels without affecting the other. The original spawnflag will supersede the new flags.`),this.h()},h(){ge(p,"list-style","none")},m(e,a){i(e,f,a),n(f,q),i(e,H,a),i(e,u,a),n(u,j),i(e,O,a),i(e,x,a),i(e,C,a),i(e,I,a),i(e,P,a),i(e,g,a),n(g,z),i(e,Q,a),i(e,p,a),n(p,y),n(y,B),n(p,G),n(p,c),n(c,K),n(p,R),n(p,N),n(N,Y),n(p,U),n(p,v),n(v,J),i(e,A,a),i(e,m,a),n(m,b),n(b,V),n(m,W),n(m,k),n(k,X),i(e,D,a),i(e,w,a),n(w,S),n(S,Z),n(w,$),n(w,_),n(_,ee),i(e,M,a)},p:te,i:te,o:te,d(e){e&&t(f),e&&t(H),e&&t(u),e&&t(O),e&&t(x),e&&t(C),e&&t(I),e&&t(P),e&&t(g),e&&t(Q),e&&t(p),e&&t(A),e&&t(m),e&&t(D),e&&t(w),e&&t(M)}}}class Ne extends we{constructor(f){super(),de(this,f,null,ye,ue,{})}}export{Ne as default};
