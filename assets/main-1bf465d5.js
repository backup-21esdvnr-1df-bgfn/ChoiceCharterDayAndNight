console.log("Script started successfully");WA.onInit().then(()=>{console.log("Scripting API ready"),WA.room.onEnterLayer("rooms_floor").subscribe(()=>{WA.room.hideLayer("facade")}),WA.room.onLeaveLayer("rooms_floor").subscribe(()=>{WA.room.showLayer("facade")})}).catch(o=>console.error(o));
