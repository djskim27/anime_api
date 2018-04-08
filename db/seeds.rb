# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

goku = Character.create(name: "Son Goku", anime: "Dragon Ball", image: "http://jpsierens.com/wp-content/uploads/2015/02/goku_by_maffo1989-d4vxux4.png", special_move: "Kamehamaha Wave")

ichigo = Character.create(name: "Kurosaki Ichigo", anime: "Bleach", image: "https://vignette.wikia.nocookie.net/infinite-loops/images/e/ed/Ichigo_Kurosaki.jpg/revision/latest?cb=20141223075403", special_move: "Getsuga Tenshou")

naruto = Character.create(name: "Uzamaki Naruto", anime: "Naruto", image: "https://vignette.wikia.nocookie.net/youtubepoop/images/e/ea/Naruto.png/revision/latest?cb=20150422212156", special_move: "Rasengan")
