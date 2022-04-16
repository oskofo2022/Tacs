package domain.persistence.entities;

import constants.ClassConstants;
import domain.persistence.constants.ColumnConstants;
import domain.persistence.constants.TableConstants;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = TableConstants.Names.INSCRIPTIONS)
public class Inscription {
    @EmbeddedId
    private InscriptionIdentifier identifier;

    @ManyToOne(optional = false)
    @MapsId(ColumnConstants.Names.TOURNAMENT_ID)
    @JoinColumn(name = ColumnConstants.Names.TOURNAMENT_ID, referencedColumnName = ColumnConstants.Names.ID)
    private Tournament tournament;

    @ManyToOne(optional = false)
    @MapsId(ColumnConstants.Names.USER_ID)
    @JoinColumn(name = ColumnConstants.Names.USER_ID, referencedColumnName = ColumnConstants.Names.ID)
    private User user;

    @OneToMany(mappedBy = ClassConstants.Names.Lowercase.INSCRIPTION)
    private List<Game> games;

    public Tournament getTournament() {
        return tournament;
    }
    public void setTournament(Tournament tournament) {
        this.tournament = tournament;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public List<Game> getGames() {
        return games;
    }
    public void setGames(List<Game> games) {
        this.games = games;
    }
}