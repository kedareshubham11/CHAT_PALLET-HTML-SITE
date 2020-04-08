Banners = new Array("IMG/res2.png","IMG/res1.png","IMG/service.jpg","IMG/chef1.jpg","IMG/personal.jpg","IMG/chef2.jpg","IMG/chef3.jpg","IMG/service2.jpg","IMG/chef.jpg","IMG/chef5.jpg","IMG/family_dinner.jpg","IMG/interior.jpeg","IMG/personalized-dining-thumb.jpg","IMG/parineeti.jpg","IMG/1.jpg")
 CurrentBanner = 0
 function DisplayBanners() 
 {
	if (document.images)
	{
		CurrentBanner++
		if (CurrentBanner == Banners.length) 
		{

			CurrentBanner = 0
		}
		document.RotateBanner.src= Banners[CurrentBanner]
		setTimeout("DisplayBanners()",1500)
	}
 }