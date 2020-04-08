
 Banners = new Array("IMG/Panipoori.jpg","IMG/MasalaChaat.jpg","IMG/DahiPapdiChaat.jpg","IMG/DahiBataSevPoori.jpg","IMG/BhelPoori.jpg","IMG/Dabeli.jpg","IMG/RagdaPatice.jpg","IMG/SevPoori.jpg","IMG/Samosa.jpg","IMG/BatataVada.jpg","IMG/Coffee.jpg","IMG/FaaludaKulfi.jpg","IMG/GajarHalwa.jpg","IMG/GulaabJamun.jpg","IMG/Kheer.jpg","IMG/Kulfi.jpg","IMG/Tea.jpg","IMG/RasMalai.jpg","IMG/MangoLassi.jpg","IMG/VegBurger.jpg","IMG/VegCutlet.jpg")
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
