class Game
   WIN_COMB =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
  ]

  def initialize
    @players = Players.new
    @turn =1
    @end =false
    @gameboard =Board.new
   end
  def move
      if @turn%2!=0
        sequence(@players.player1,"X")
    elsif @turn%2 ==0
        sequence(@players.player2,"O")
    end
    move
end
    

def sequence(player,sym)
    puts "#{player} choose a position"
    @player_move =gets.chomp.to_i
    puts @player_move
    if(0..8).include?(@player_move)&& @gameboard.board[@player_move]==" " && @end==false
        @turn+=1
        @gameboard.board_update(@player_move,sym)
        win_checking
        draw_checking
    else
        puts "****Please enter valid option***"
    end
end

def win_checking
    WIN_COMB.each do |wc|
        if(@gameboard.board[wc[0]]==@gameboard.board[wc[1]])&& @gameboard.board[wc[1]]==@gameboard.board[wc[2]] && @gameboard.board[wc[0]]!=" "
            if @gameboard.board[wc[0]]=="X"
                puts "#{@players.player1} wins"
                @end =true
                play_again
            elsif @gameboard.board[wc[0]]=="0"
                puts "#{@players.player2} is the  winner !! Congratulations."
                @end =true
                play_again
            end
        end
     end

end   
    def draw_checking
        if @turn==9 && @end == false
            puts "The game is draw"
            play_again
        end
    end

    def play_again
        puts "Do you want to play again (Y/N)"
        option = gets.chomp
        if option == "Y"
            game = Game.new
        elsif option == "N"
            puts "End of game"
        else
            puts "End of game"
        end
    end
 end


class Board
    attr_reader :board
    def initialize
    puts "whenever your turn is there provide values between 0 to 8"
    puts "0 | 1 | 2"
    puts "---------"
    puts "3 | 4 | 5"
    puts "---------"
    puts "6 | 7 | 8"
    puts "---------"
    @board =[" "," "," "," "," "," "," "," "," "," "]
    end
    def display(board)
        puts "#{board[0]} | #{board[1]} | #{board[2]}"
        puts "---------"
        puts "#{board[3]} | #{board[4]} | #{board[5]}"
        puts "---------"
        puts "#{board[6]} | #{board[7]} | #{board[8]}"
        puts "---------"
    end
    def board_update(pos,sym)
    @board[pos]=sym
    display(@board)
    end
end

class Players
    attr_reader :player1,:player2
    def initialize
    puts "Player 1 ,please enter your name"
    @player1 = gets.chomp
    puts "#{player1} is X"
    puts "Player 2 :"
    @player2 = gets.chomp
    puts "#{player2} is O"
    end
end    





game = Game.new
game.move
