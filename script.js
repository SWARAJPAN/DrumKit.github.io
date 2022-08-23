
		window.addEventListener('keydown', function(e)
		{
			var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
			var key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
			if(audio){
				audio.play()
				audio.currentTime=0
				key.classList.add("playing")
			}
			return;
		});
			var tap=document.querySelectorAll(".key")
			tap.forEach((e)=>
			{
				e.addEventListener('transitionend',remove)
			});
			function remove(t)
			{
				if(t.propertyName="transform")
				{
					this.classList.remove("playing")
				}
				return;
			}
