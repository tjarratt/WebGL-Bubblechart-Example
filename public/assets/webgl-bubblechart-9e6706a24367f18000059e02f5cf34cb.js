window.onload=function(){for(var e=function(){function e(){i.forEach(function(e){e.scale.set(o,o,o)}),a.render(t,n),1!=o&&(requestAnimationFrame(function(){e()}),TWEEN.update())}var n,t=new THREE.Scene,a=new THREE.WebGLRenderer,i=[],r=function(e,r){this.data=r,this.container=document.getElementById(e);var o=container.offsetWidth||500,s=container.offsetHeight||500;n=new THREE.PerspectiveCamera(45,o/s,1,1e3,new THREE.MeshNormalMaterial),n.position.x=105,n.position.y=105,n.position.z=255,a.setSize(o,s),a.domElement.style.border="1px solid black",this.container.appendChild(a.domElement);var d=2.1,E=50;r.forEach(function(e){var n=e.size,a=new THREE.Mesh(new THREE.SphereGeometry(n,E,E),new THREE.MeshNormalMaterial);a.overdraw=!0,a.position.set(e.x*d,e.y*d,e.z),a.finalRadius=n,t.add(a),i.push(a)})},o=1e-5,s={radius:0},d={radius:1};return new TWEEN.Tween(s).to(d,3200).easing(TWEEN.Easing.Elastic.Out).delay(2e3).onUpdate(function(){o=this.radius}).start(),r.prototype.render=function(i){i=i||{},i.animate?requestAnimationFrame(function(){e()}):a.render(t,n)},r}(),n=[],t=0;55>t;++t)n.push({size:5+15*Math.random(),x:100*Math.random(),y:100*Math.random(),z:-255*Math.random()});var a=new e("container",n);a.render({animate:!0})};